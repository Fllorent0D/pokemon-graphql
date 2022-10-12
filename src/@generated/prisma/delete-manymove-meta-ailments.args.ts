import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereInput } from '../move-meta-ailments/move-meta-ailments-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsWhereInput, {nullable:true})
    @Type(() => move_meta_ailmentsWhereInput)
    where?: move_meta_ailmentsWhereInput;
}
