import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateWithoutLanguagesInput } from './item-flavor-text-create-without-languages.input';

@InputType()
export class item_flavor_textCreateOrConnectWithoutLanguagesInput {

    @Field(() => item_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_textWhereUniqueInput)
    where!: item_flavor_textWhereUniqueInput;

    @Field(() => item_flavor_textCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_flavor_textCreateWithoutLanguagesInput)
    create!: item_flavor_textCreateWithoutLanguagesInput;
}
