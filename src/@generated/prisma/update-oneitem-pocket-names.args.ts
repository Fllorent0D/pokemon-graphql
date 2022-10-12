import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocket_namesUpdateInput } from '../item-pocket-names/item-pocket-names-update.input';
import { Type } from 'class-transformer';
import { item_pocket_namesWhereUniqueInput } from '../item-pocket-names/item-pocket-names-where-unique.input';

@ArgsType()
export class UpdateOneitemPocketNamesArgs {

    @Field(() => item_pocket_namesUpdateInput, {nullable:false})
    @Type(() => item_pocket_namesUpdateInput)
    data!: item_pocket_namesUpdateInput;

    @Field(() => item_pocket_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_pocket_namesWhereUniqueInput)
    where!: item_pocket_namesWhereUniqueInput;
}
