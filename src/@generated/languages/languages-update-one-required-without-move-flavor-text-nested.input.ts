import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_flavor_textInput } from './languages-create-without-move-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_flavor_textInput } from './languages-create-or-connect-without-move-flavor-text.input';
import { languagesUpsertWithoutMove_flavor_textInput } from './languages-upsert-without-move-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_flavor_textInput } from './languages-update-without-move-flavor-text.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_flavor_textNestedInput {

    @Field(() => languagesCreateWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_flavor_textInput)
    create?: languagesCreateWithoutMove_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_flavor_textInput;

    @Field(() => languagesUpsertWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_flavor_textInput)
    upsert?: languagesUpsertWithoutMove_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_flavor_textInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_flavor_textInput)
    update?: languagesUpdateWithoutMove_flavor_textInput;
}
