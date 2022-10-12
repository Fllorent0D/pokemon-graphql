import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutType_namesInput } from './languages-create-without-type-names.input';

@InputType()
export class languagesCreateOrConnectWithoutType_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutType_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutType_namesInput)
    create!: languagesCreateWithoutType_namesInput;
}
