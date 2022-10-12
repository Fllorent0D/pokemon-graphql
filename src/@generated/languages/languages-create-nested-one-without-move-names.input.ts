import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_namesInput } from './languages-create-without-move-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_namesInput } from './languages-create-or-connect-without-move-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_namesInput {

    @Field(() => languagesCreateWithoutMove_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_namesInput)
    create?: languagesCreateWithoutMove_namesInput;

    @Field(() => languagesCreateOrConnectWithoutMove_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
