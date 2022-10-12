import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_flagsOrderByWithRelationInput } from '../move-flags/move-flags-order-by-with-relation.input';
import { movesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';

@InputType()
export class move_flag_mapOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: keyof typeof SortOrder;

    @Field(() => move_flagsOrderByWithRelationInput, {nullable:true})
    move_flags?: move_flagsOrderByWithRelationInput;

    @Field(() => movesOrderByWithRelationInput, {nullable:true})
    moves?: movesOrderByWithRelationInput;
}
