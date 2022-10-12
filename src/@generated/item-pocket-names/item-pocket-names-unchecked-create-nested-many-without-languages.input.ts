import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesCreateWithoutLanguagesInput } from './item-pocket-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_pocket_namesCreateOrConnectWithoutLanguagesInput } from './item-pocket-names-create-or-connect-without-languages.input';
import { item_pocket_namesWhereUniqueInput } from './item-pocket-names-where-unique.input';

@InputType()
export class item_pocket_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_pocket_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_pocket_namesCreateWithoutLanguagesInput)
    create?: Array<item_pocket_namesCreateWithoutLanguagesInput>;

    @Field(() => [item_pocket_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_pocket_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_pocket_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    connect?: Array<item_pocket_namesWhereUniqueInput>;
}
