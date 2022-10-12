import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutBerry_firmness_namesInput } from './languages-create-without-berry-firmness-names.input';

@InputType()
export class languagesCreateOrConnectWithoutBerry_firmness_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutBerry_firmness_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutBerry_firmness_namesInput)
    create!: languagesCreateWithoutBerry_firmness_namesInput;
}
