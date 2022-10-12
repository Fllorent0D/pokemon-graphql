import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutNature_namesInput } from './languages-create-without-nature-names.input';

@InputType()
export class languagesCreateOrConnectWithoutNature_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutNature_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutNature_namesInput)
    create!: languagesCreateWithoutNature_namesInput;
}
