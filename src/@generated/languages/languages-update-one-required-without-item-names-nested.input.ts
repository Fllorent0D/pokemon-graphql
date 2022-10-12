import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_namesInput } from './languages-create-without-item-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_namesInput } from './languages-create-or-connect-without-item-names.input';
import { languagesUpsertWithoutItem_namesInput } from './languages-upsert-without-item-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutItem_namesInput } from './languages-update-without-item-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutItem_namesNestedInput {

    @Field(() => languagesCreateWithoutItem_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_namesInput)
    create?: languagesCreateWithoutItem_namesInput;

    @Field(() => languagesCreateOrConnectWithoutItem_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_namesInput;

    @Field(() => languagesUpsertWithoutItem_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutItem_namesInput)
    upsert?: languagesUpsertWithoutItem_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutItem_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutItem_namesInput)
    update?: languagesUpdateWithoutItem_namesInput;
}
