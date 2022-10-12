import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokeathlon_stat_namesInput } from './languages-create-without-pokeathlon-stat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokeathlon_stat_namesInput } from './languages-create-or-connect-without-pokeathlon-stat-names.input';
import { languagesUpsertWithoutPokeathlon_stat_namesInput } from './languages-upsert-without-pokeathlon-stat-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokeathlon_stat_namesInput } from './languages-update-without-pokeathlon-stat-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokeathlon_stat_namesNestedInput {

    @Field(() => languagesCreateWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokeathlon_stat_namesInput)
    create?: languagesCreateWithoutPokeathlon_stat_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokeathlon_stat_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokeathlon_stat_namesInput;

    @Field(() => languagesUpsertWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokeathlon_stat_namesInput)
    upsert?: languagesUpsertWithoutPokeathlon_stat_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokeathlon_stat_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokeathlon_stat_namesInput)
    update?: languagesUpdateWithoutPokeathlon_stat_namesInput;
}
