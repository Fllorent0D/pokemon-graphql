import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutPokemon_statsInput } from './stats-create-without-pokemon-stats.input';

@InputType()
export class statsCreateOrConnectWithoutPokemon_statsInput {

    @Field(() => statsWhereUniqueInput, {nullable:false})
    @Type(() => statsWhereUniqueInput)
    where!: statsWhereUniqueInput;

    @Field(() => statsCreateWithoutPokemon_statsInput, {nullable:false})
    @Type(() => statsCreateWithoutPokemon_statsInput)
    create!: statsCreateWithoutPokemon_statsInput;
}
