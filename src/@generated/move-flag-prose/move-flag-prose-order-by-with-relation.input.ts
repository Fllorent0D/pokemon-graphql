import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { move_flagsOrderByWithRelationInput } from '../move-flags/move-flags-order-by-with-relation.input';

@InputType()
export class move_flag_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => move_flagsOrderByWithRelationInput, {nullable:true})
    move_flags?: move_flagsOrderByWithRelationInput;
}
