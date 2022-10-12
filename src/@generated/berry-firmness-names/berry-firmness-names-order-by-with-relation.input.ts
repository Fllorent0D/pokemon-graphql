import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { berry_firmnessOrderByWithRelationInput } from '../berry-firmness/berry-firmness-order-by-with-relation.input';

@InputType()
export class berry_firmness_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    berry_firmness_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => berry_firmnessOrderByWithRelationInput, {nullable:true})
    berry_firmness?: berry_firmnessOrderByWithRelationInput;
}
