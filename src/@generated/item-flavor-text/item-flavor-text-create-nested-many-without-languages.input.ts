import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textCreateWithoutLanguagesInput } from './item-flavor-text-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateOrConnectWithoutLanguagesInput } from './item-flavor-text-create-or-connect-without-languages.input';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';

@InputType()
export class item_flavor_textCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_flavor_textCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_textCreateWithoutLanguagesInput)
    create?: Array<item_flavor_textCreateWithoutLanguagesInput>;

    @Field(() => [item_flavor_textCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_textCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_flavor_textCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    connect?: Array<item_flavor_textWhereUniqueInput>;
}
