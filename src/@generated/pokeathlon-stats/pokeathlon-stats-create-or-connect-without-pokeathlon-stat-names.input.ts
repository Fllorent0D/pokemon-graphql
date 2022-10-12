import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsWhereUniqueInput } from './pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput } from './pokeathlon-stats-create-without-pokeathlon-stat-names.input';

@InputType()
export class pokeathlon_statsCreateOrConnectWithoutPokeathlon_stat_namesInput {

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    where!: pokeathlon_statsWhereUniqueInput;

    @Field(() => pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput, {nullable:false})
    @Type(() => pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput)
    create!: pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput;
}
