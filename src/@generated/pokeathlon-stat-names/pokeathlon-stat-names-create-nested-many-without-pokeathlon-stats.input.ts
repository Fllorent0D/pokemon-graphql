import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-create-without-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-create-or-connect-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesWhereUniqueInput } from './pokeathlon-stat-names-where-unique.input';

@InputType()
export class pokeathlon_stat_namesCreateNestedManyWithoutPokeathlon_statsInput {

    @Field(() => [pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput)
    create?: Array<pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput>;

    @Field(() => [pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput)
    connectOrCreate?: Array<pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    connect?: Array<pokeathlon_stat_namesWhereUniqueInput>;
}
