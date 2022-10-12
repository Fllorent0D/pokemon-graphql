import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { pokemon_colorsOrderByWithRelationInput } from '../pokemon-colors/pokemon-colors-order-by-with-relation.input';

@InputType()
export class pokemon_color_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_color_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => pokemon_colorsOrderByWithRelationInput, {nullable:true})
    pokemon_colors?: pokemon_colorsOrderByWithRelationInput;
}
