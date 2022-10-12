import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsCreateInput } from '../pokemon-stats/pokemon-stats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonStatsArgs {

    @Field(() => pokemon_statsCreateInput, {nullable:false})
    @Type(() => pokemon_statsCreateInput)
    data!: pokemon_statsCreateInput;
}
