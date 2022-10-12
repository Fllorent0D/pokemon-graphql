import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesCreateWithoutLanguagesInput } from './item-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_namesCreateOrConnectWithoutLanguagesInput } from './item-names-create-or-connect-without-languages.input';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';

@InputType()
export class item_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_namesCreateWithoutLanguagesInput)
    create?: Array<item_namesCreateWithoutLanguagesInput>;

    @Field(() => [item_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    connect?: Array<item_namesWhereUniqueInput>;
}
