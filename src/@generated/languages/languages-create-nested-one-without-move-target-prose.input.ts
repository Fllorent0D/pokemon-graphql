import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_target_proseInput } from './languages-create-without-move-target-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_target_proseInput } from './languages-create-or-connect-without-move-target-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_target_proseInput {

    @Field(() => languagesCreateWithoutMove_target_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_target_proseInput)
    create?: languagesCreateWithoutMove_target_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_target_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_target_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_target_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
