import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_flag_proseInput } from './languages-create-without-move-flag-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_flag_proseInput } from './languages-create-or-connect-without-move-flag-prose.input';
import { languagesUpsertWithoutMove_flag_proseInput } from './languages-upsert-without-move-flag-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_flag_proseInput } from './languages-update-without-move-flag-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_flag_proseNestedInput {

    @Field(() => languagesCreateWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_flag_proseInput)
    create?: languagesCreateWithoutMove_flag_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_flag_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_flag_proseInput;

    @Field(() => languagesUpsertWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_flag_proseInput)
    upsert?: languagesUpsertWithoutMove_flag_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_flag_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_flag_proseInput)
    update?: languagesUpdateWithoutMove_flag_proseInput;
}
