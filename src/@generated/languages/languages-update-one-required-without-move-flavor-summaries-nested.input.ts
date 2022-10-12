import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_flavor_summariesInput } from './languages-create-without-move-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_flavor_summariesInput } from './languages-create-or-connect-without-move-flavor-summaries.input';
import { languagesUpsertWithoutMove_flavor_summariesInput } from './languages-upsert-without-move-flavor-summaries.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_flavor_summariesInput } from './languages-update-without-move-flavor-summaries.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput {

    @Field(() => languagesCreateWithoutMove_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_flavor_summariesInput)
    create?: languagesCreateWithoutMove_flavor_summariesInput;

    @Field(() => languagesCreateOrConnectWithoutMove_flavor_summariesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_flavor_summariesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_flavor_summariesInput;

    @Field(() => languagesUpsertWithoutMove_flavor_summariesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_flavor_summariesInput)
    upsert?: languagesUpsertWithoutMove_flavor_summariesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_flavor_summariesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_flavor_summariesInput)
    update?: languagesUpdateWithoutMove_flavor_summariesInput;
}
