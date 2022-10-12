import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';

@InputType()
export class language_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages_language_names_local_language_idTolanguages?: languagesOrderByWithRelationInput;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages_language_names_language_idTolanguages?: languagesOrderByWithRelationInput;
}
