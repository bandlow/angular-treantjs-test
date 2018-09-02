import { Component, OnInit } from '@angular/core';
import { TreeNodeChild } from '../../models/TreeNodeChild';
import { TreeService } from '../../tree.service';

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.css']
})
export class TreeFormComponent implements OnInit {

  nodeStructure: TreeNodeChild = new TreeNodeChild();
  constructor(public treeService: TreeService) { }

  ngOnInit() {
  }

  private uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // tslint:disable-next-line:no-bitwise
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  onAddNode(node: TreeNodeChild) {
    node.HTMLid = this.uuidv4();
    this.treeService.addNode(node);
    this.nodeStructure = new TreeNodeChild();
  }

}