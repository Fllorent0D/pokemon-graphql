import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesCreateWithoutLanguagesInput } from './pokeathlon-stat-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput } from './pokeathlon-stat-names-create-or-connect-without-languages.input';
import { pokeathlon_stat_namesWhereUniqueInput } from './pokeathlon-stat-names-where-unique.input';

@InputType()
export class pokeathlon_stat_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [pokeathlon_stat_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateWithoutLanguagesInput)
    create?: Array<pokeathlon_stat_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    connect?: Array<pokeathlon_stat_namesWhereUniqueInput>;
}
