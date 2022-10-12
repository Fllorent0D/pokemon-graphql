import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutAbility_flavor_textInput } from './languages-create-without-ability-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutAbility_flavor_textInput } from './languages-create-or-connect-without-ability-flavor-text.input';
import { languagesUpsertWithoutAbility_flavor_textInput } from './languages-upsert-without-ability-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutAbility_flavor_textInput } from './languages-update-without-ability-flavor-text.input';

@InputType()
export class languagesUpdateOneRequiredWithoutAbility_flavor_textNestedInput {

    @Field(() => languagesCreateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutAbility_flavor_textInput)
    create?: languagesCreateWithoutAbility_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutAbility_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutAbility_flavor_textInput;

    @Field(() => languagesUpsertWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => languagesUpsertWithoutAbility_flavor_textInput)
    upsert?: languagesUpsertWithoutAbility_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutAbility_flavor_textInput, {nullable:true})
    @Type(() => languagesUpdateWithoutAbility_flavor_textInput)
    update?: languagesUpdateWithoutAbility_flavor_textInput;
}
