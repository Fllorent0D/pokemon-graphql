import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsUpdateInput } from '../pokemon-stats/pokemon-stats-update.input';
import { Type } from 'class-transformer';
import { pokemon_statsWhereUniqueInput } from '../pokemon-stats/pokemon-stats-where-unique.input';

@ArgsType()
export class UpdateOnepokemonStatsArgs {

    @Field(() => pokemon_statsUpdateInput, {nullable:false})
    @Type(() => pokemon_statsUpdateInput)
    data!: pokemon_statsUpdateInput;

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;
}
