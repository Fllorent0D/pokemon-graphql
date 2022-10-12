import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutGeneration_namesInput } from './languages-create-without-generation-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutGeneration_namesInput } from './languages-create-or-connect-without-generation-names.input';
import { languagesUpsertWithoutGeneration_namesInput } from './languages-upsert-without-generation-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutGeneration_namesInput } from './languages-update-without-generation-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutGeneration_namesNestedInput {

    @Field(() => languagesCreateWithoutGeneration_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutGeneration_namesInput)
    create?: languagesCreateWithoutGeneration_namesInput;

    @Field(() => languagesCreateOrConnectWithoutGeneration_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutGeneration_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutGeneration_namesInput;

    @Field(() => languagesUpsertWithoutGeneration_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutGeneration_namesInput)
    upsert?: languagesUpsertWithoutGeneration_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutGeneration_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutGeneration_namesInput)
    update?: languagesUpdateWithoutGeneration_namesInput;
}
