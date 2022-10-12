import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesWhereUniqueInput } from '../item-pocket-names/item-pocket-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemPocketNamesArgs {

    @Field(() => item_pocket_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_pocket_namesWhereUniqueInput)
    where!: item_pocket_namesWhereUniqueInput;
}
