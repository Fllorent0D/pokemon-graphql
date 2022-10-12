import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereUniqueInput } from '../move-meta-ailments/move-meta-ailments-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    where!: move_meta_ailmentsWhereUniqueInput;
}
