import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { item_pocketsOrderByWithRelationInput } from '../item-pockets/item-pockets-order-by-with-relation.input';

@InputType()
export class item_pocket_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    item_pocket_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => item_pocketsOrderByWithRelationInput, {nullable:true})
    item_pockets?: item_pocketsOrderByWithRelationInput;
}
