import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutType_namesInput } from './languages-create-without-type-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutType_namesInput } from './languages-create-or-connect-without-type-names.input';
import { languagesUpsertWithoutType_namesInput } from './languages-upsert-without-type-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutType_namesInput } from './languages-update-without-type-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutType_namesNestedInput {

    @Field(() => languagesCreateWithoutType_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutType_namesInput)
    create?: languagesCreateWithoutType_namesInput;

    @Field(() => languagesCreateOrConnectWithoutType_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutType_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutType_namesInput;

    @Field(() => languagesUpsertWithoutType_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutType_namesInput)
    upsert?: languagesUpsertWithoutType_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutType_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutType_namesInput)
    update?: languagesUpdateWithoutType_namesInput;
}
