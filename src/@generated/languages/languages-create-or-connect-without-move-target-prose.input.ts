import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_target_proseInput } from './languages-create-without-move-target-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_target_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_target_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_target_proseInput)
    create!: languagesCreateWithoutMove_target_proseInput;
}
