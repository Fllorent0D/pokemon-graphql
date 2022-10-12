import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_statsUpdateManyMutationInput } from '../pokemon-stats/pokemon-stats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_statsWhereInput } from '../pokemon-stats/pokemon-stats-where.input';

@ArgsType()
export class UpdateManypokemonStatsArgs {

    @Field(() => pokemon_statsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_statsUpdateManyMutationInput)
    data!: pokemon_statsUpdateManyMutationInput;

    @Field(() => pokemon_statsWhereInput, {nullable:true})
    @Type(() => pokemon_statsWhereInput)
    where?: pokemon_statsWhereInput;
}
