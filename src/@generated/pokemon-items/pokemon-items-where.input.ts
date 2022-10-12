import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';
import { VersionsRelationFilter } from '../prisma/versions-relation-filter.input';
import { PokemonRelationFilter } from '../prisma/pokemon-relation-filter.input';

@InputType()
export class pokemon_itemsWhereInput {

    @Field(() => [pokemon_itemsWhereInput], {nullable:true})
    AND?: Array<pokemon_itemsWhereInput>;

    @Field(() => [pokemon_itemsWhereInput], {nullable:true})
    OR?: Array<pokemon_itemsWhereInput>;

    @Field(() => [pokemon_itemsWhereInput], {nullable:true})
    NOT?: Array<pokemon_itemsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    rarity?: IntFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;

    @Field(() => VersionsRelationFilter, {nullable:true})
    versions?: VersionsRelationFilter;

    @Field(() => PokemonRelationFilter, {nullable:true})
    pokemon?: PokemonRelationFilter;
}
