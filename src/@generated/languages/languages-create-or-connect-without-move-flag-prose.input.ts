import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_flag_proseInput } from './languages-create-without-move-flag-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_flag_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_flag_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_flag_proseInput)
    create!: languagesCreateWithoutMove_flag_proseInput;
}
