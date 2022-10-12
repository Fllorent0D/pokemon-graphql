import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_target_proseInput } from './languages-create-without-move-target-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_target_proseInput } from './languages-create-or-connect-without-move-target-prose.input';
import { languagesUpsertWithoutMove_target_proseInput } from './languages-upsert-without-move-target-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_target_proseInput } from './languages-update-without-move-target-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_target_proseNestedInput {

    @Field(() => languagesCreateWithoutMove_target_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_target_proseInput)
    create?: languagesCreateWithoutMove_target_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_target_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_target_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_target_proseInput;

    @Field(() => languagesUpsertWithoutMove_target_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_target_proseInput)
    upsert?: languagesUpsertWithoutMove_target_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_target_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_target_proseInput)
    update?: languagesUpdateWithoutMove_target_proseInput;
}
