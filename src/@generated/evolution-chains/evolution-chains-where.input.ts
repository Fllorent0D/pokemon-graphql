import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';
import { Pokemon_speciesListRelationFilter } from '../prisma/pokemon-species-list-relation-filter.input';

@InputType()
export class evolution_chainsWhereInput {

    @Field(() => [evolution_chainsWhereInput], {nullable:true})
    AND?: Array<evolution_chainsWhereInput>;

    @Field(() => [evolution_chainsWhereInput], {nullable:true})
    OR?: Array<evolution_chainsWhereInput>;

    @Field(() => [evolution_chainsWhereInput], {nullable:true})
    NOT?: Array<evolution_chainsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    baby_trigger_item_id?: IntNullableFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;

    @Field(() => Pokemon_speciesListRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesListRelationFilter;
}
