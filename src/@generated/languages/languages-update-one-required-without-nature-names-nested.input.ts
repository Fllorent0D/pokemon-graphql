import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutNature_namesInput } from './languages-create-without-nature-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutNature_namesInput } from './languages-create-or-connect-without-nature-names.input';
import { languagesUpsertWithoutNature_namesInput } from './languages-upsert-without-nature-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutNature_namesInput } from './languages-update-without-nature-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutNature_namesNestedInput {

    @Field(() => languagesCreateWithoutNature_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutNature_namesInput)
    create?: languagesCreateWithoutNature_namesInput;

    @Field(() => languagesCreateOrConnectWithoutNature_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutNature_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutNature_namesInput;

    @Field(() => languagesUpsertWithoutNature_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutNature_namesInput)
    upsert?: languagesUpsertWithoutNature_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutNature_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutNature_namesInput)
    update?: languagesUpdateWithoutNature_namesInput;
}
