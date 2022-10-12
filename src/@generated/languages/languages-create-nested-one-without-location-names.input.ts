import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutLocation_namesInput } from './languages-create-without-location-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutLocation_namesInput } from './languages-create-or-connect-without-location-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutLocation_namesInput {

    @Field(() => languagesCreateWithoutLocation_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutLocation_namesInput)
    create?: languagesCreateWithoutLocation_namesInput;

    @Field(() => languagesCreateOrConnectWithoutLocation_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutLocation_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutLocation_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
