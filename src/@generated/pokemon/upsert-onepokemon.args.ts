import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { pokemonCreateInput } from './pokemon-create.input';
import { pokemonUpdateInput } from './pokemon-update.input';

@ArgsType()
export class UpsertOnepokemonArgs {

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;

    @Field(() => pokemonCreateInput, {nullable:false})
    @Type(() => pokemonCreateInput)
    create!: pokemonCreateInput;

    @Field(() => pokemonUpdateInput, {nullable:false})
    @Type(() => pokemonUpdateInput)
    update!: pokemonUpdateInput;
}
