import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesCreateWithoutLanguagesInput } from './pokeathlon-stat-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput } from './pokeathlon-stat-names-create-or-connect-without-languages.input';
import { pokeathlon_stat_namesUpsertWithWhereUniqueWithoutLanguagesInput } from './pokeathlon-stat-names-upsert-with-where-unique-without-languages.input';
import { pokeathlon_stat_namesWhereUniqueInput } from './pokeathlon-stat-names-where-unique.input';
import { pokeathlon_stat_namesUpdateWithWhereUniqueWithoutLanguagesInput } from './pokeathlon-stat-names-update-with-where-unique-without-languages.input';
import { pokeathlon_stat_namesUpdateManyWithWhereWithoutLanguagesInput } from './pokeathlon-stat-names-update-many-with-where-without-languages.input';
import { pokeathlon_stat_namesScalarWhereInput } from './pokeathlon-stat-names-scalar-where.input';

@InputType()
export class pokeathlon_stat_namesUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [pokeathlon_stat_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateWithoutLanguagesInput)
    create?: Array<pokeathlon_stat_namesCreateWithoutLanguagesInput>;

    @Field(() => [pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<pokeathlon_stat_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [pokeathlon_stat_namesUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<pokeathlon_stat_namesUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    set?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    disconnect?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    delete?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    connect?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<pokeathlon_stat_namesUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [pokeathlon_stat_namesUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<pokeathlon_stat_namesUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [pokeathlon_stat_namesScalarWhereInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesScalarWhereInput)
    deleteMany?: Array<pokeathlon_stat_namesScalarWhereInput>;
}
