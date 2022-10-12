import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_proseInput } from './languages-create-without-item-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_proseInput } from './languages-create-or-connect-without-item-prose.input';
import { languagesUpsertWithoutItem_proseInput } from './languages-upsert-without-item-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutItem_proseInput } from './languages-update-without-item-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutItem_proseNestedInput {

    @Field(() => languagesCreateWithoutItem_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_proseInput)
    create?: languagesCreateWithoutItem_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_proseInput;

    @Field(() => languagesUpsertWithoutItem_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutItem_proseInput)
    upsert?: languagesUpsertWithoutItem_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutItem_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutItem_proseInput)
    update?: languagesUpdateWithoutItem_proseInput;
}
