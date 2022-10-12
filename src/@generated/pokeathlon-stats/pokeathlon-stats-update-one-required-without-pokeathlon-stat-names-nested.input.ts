import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput } from './pokeathlon-stats-create-without-pokeathlon-stat-names.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateOrConnectWithoutPokeathlon_stat_namesInput } from './pokeathlon-stats-create-or-connect-without-pokeathlon-stat-names.input';
import { pokeathlon_statsUpsertWithoutPokeathlon_stat_namesInput } from './pokeathlon-stats-upsert-without-pokeathlon-stat-names.input';
import { pokeathlon_statsWhereUniqueInput } from './pokeathlon-stats-where-unique.input';
import { pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput } from './pokeathlon-stats-update-without-pokeathlon-stat-names.input';

@InputType()
export class pokeathlon_statsUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput {

    @Field(() => pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput)
    create?: pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput;

    @Field(() => pokeathlon_statsCreateOrConnectWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateOrConnectWithoutPokeathlon_stat_namesInput)
    connectOrCreate?: pokeathlon_statsCreateOrConnectWithoutPokeathlon_stat_namesInput;

    @Field(() => pokeathlon_statsUpsertWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => pokeathlon_statsUpsertWithoutPokeathlon_stat_namesInput)
    upsert?: pokeathlon_statsUpsertWithoutPokeathlon_stat_namesInput;

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    connect?: pokeathlon_statsWhereUniqueInput;

    @Field(() => pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput)
    update?: pokeathlon_statsUpdateWithoutPokeathlon_stat_namesInput;
}
