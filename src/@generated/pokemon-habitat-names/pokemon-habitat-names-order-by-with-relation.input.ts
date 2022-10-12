import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { pokemon_habitatsOrderByWithRelationInput } from '../pokemon-habitats/pokemon-habitats-order-by-with-relation.input';

@InputType()
export class pokemon_habitat_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_habitat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => pokemon_habitatsOrderByWithRelationInput, {nullable:true})
    pokemon_habitats?: pokemon_habitatsOrderByWithRelationInput;
}
