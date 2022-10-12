import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { pokemon_speciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';

@InputType()
export class pokemon_species_namesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genus?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByWithRelationInput;
}
