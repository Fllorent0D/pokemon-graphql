import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutLocation_namesInput } from './languages-create-without-location-names.input';

@InputType()
export class languagesCreateOrConnectWithoutLocation_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutLocation_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutLocation_namesInput)
    create!: languagesCreateWithoutLocation_namesInput;
}
