import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonUpdateInput } from './pokemon-update.input';
import { Type } from 'class-transformer';
import { pokemonWhereUniqueInput } from './pokemon-where-unique.input';

@ArgsType()
export class UpdateOnepokemonArgs {

    @Field(() => pokemonUpdateInput, {nullable:false})
    @Type(() => pokemonUpdateInput)
    data!: pokemonUpdateInput;

    @Field(() => pokemonWhereUniqueInput, {nullable:false})
    @Type(() => pokemonWhereUniqueInput)
    where!: pokemonWhereUniqueInput;
}
