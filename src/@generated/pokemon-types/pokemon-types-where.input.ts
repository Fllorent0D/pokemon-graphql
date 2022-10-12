import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { TypesRelationFilter } from '../prisma/types-relation-filter.input';
import { PokemonRelationFilter } from '../prisma/pokemon-relation-filter.input';

@InputType()
export class pokemon_typesWhereInput {

    @Field(() => [pokemon_typesWhereInput], {nullable:true})
    AND?: Array<pokemon_typesWhereInput>;

    @Field(() => [pokemon_typesWhereInput], {nullable:true})
    OR?: Array<pokemon_typesWhereInput>;

    @Field(() => [pokemon_typesWhereInput], {nullable:true})
    NOT?: Array<pokemon_typesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    slot?: IntFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types?: TypesRelationFilter;

    @Field(() => PokemonRelationFilter, {nullable:true})
    pokemon?: PokemonRelationFilter;
}
