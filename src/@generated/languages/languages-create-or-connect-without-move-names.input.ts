import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_namesInput } from './languages-create-without-move-names.input';

@InputType()
export class languagesCreateOrConnectWithoutMove_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutMove_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_namesInput)
    create!: languagesCreateWithoutMove_namesInput;
}
