import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutVersion_namesInput } from './languages-create-without-version-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutVersion_namesInput } from './languages-create-or-connect-without-version-names.input';
import { languagesUpsertWithoutVersion_namesInput } from './languages-upsert-without-version-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutVersion_namesInput } from './languages-update-without-version-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutVersion_namesNestedInput {

    @Field(() => languagesCreateWithoutVersion_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutVersion_namesInput)
    create?: languagesCreateWithoutVersion_namesInput;

    @Field(() => languagesCreateOrConnectWithoutVersion_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutVersion_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutVersion_namesInput;

    @Field(() => languagesUpsertWithoutVersion_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutVersion_namesInput)
    upsert?: languagesUpsertWithoutVersion_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutVersion_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutVersion_namesInput)
    update?: languagesUpdateWithoutVersion_namesInput;
}
